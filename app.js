(() => {
  "use strict";

  const questions = window.PRINCE2_QUESTIONS;
  const screens = {
    welcome: document.getElementById("welcome-screen"),
    topics: document.getElementById("topic-screen"),
    resources: document.getElementById("resources-screen"),
    quiz: document.getElementById("quiz-screen"),
    results: document.getElementById("results-screen")
  };
  const state = { queue: [], index: 0, selected: [], answered: false, mode: "all", topicDomain: "", missed: [] };
  const byId = (id) => document.getElementById(id);
  const optionLetters = ["A", "B", "C", "D"];

  function showScreen(name) {
    Object.entries(screens).forEach(([key, element]) => {
      element.classList.toggle("hidden", key !== name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz(mode, source = questions, topicDomain = "") {
    state.queue = source.filter((question) => {
      if (mode === "scenarios" && question.type !== "scenario") return false;
      return !topicDomain || question.domain === topicDomain;
    });
    state.index = 0;
    state.selected = [];
    state.answered = false;
    state.mode = mode;
    state.topicDomain = topicDomain;
    state.missed = [];
    byId("quiz-mode-label").textContent = mode === "scenarios"
      ? "SCENARIO PRACTICE"
      : mode === "topic"
        ? topicDomain.toUpperCase()
        : source === questions ? "FULL QUIZ" : "REVIEW";
    byId("exit-quiz").innerHTML = mode === "topic"
      ? '<span aria-hidden="true">←</span> Back to topics'
      : '<span aria-hidden="true">←</span> Exit quiz';
    showScreen("quiz");
    renderQuestion();
  }

  function renderQuestion() {
    const question = state.queue[state.index];
    if (!question) return showResults();
    state.selected = [];
    state.answered = false;
    const current = state.index + 1;
    const percent = Math.round((state.index / state.queue.length) * 100);
    byId("question-counter").textContent = `QUESTION ${String(current).padStart(2, "0")} / ${String(state.queue.length).padStart(2, "0")}`;
    byId("progress-percent").textContent = `${percent}%`;
    byId("progress-fill").style.width = `${percent}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", String(percent));
    byId("question-type").textContent = question.type === "scenario" ? "Scenario" : "Knowledge check";
    byId("question-type").classList.toggle("standard", question.type !== "scenario");
    byId("question-domain").textContent = `${question.domain} · ${question.topic}`;
    byId("question-title").textContent = question.selectCount
      ? `Select ${question.selectCount} answers`
      : "Choose the best answer";
    byId("question-prompt").textContent = question.prompt;
    byId("selection-hint").textContent = question.selectCount
      ? `Choose exactly ${question.selectCount} options.`
      : "Select one option.";
    byId("feedback").classList.add("hidden");
    byId("feedback").classList.remove("wrong");
    byId("check-answer").classList.remove("hidden");
    byId("next-question").classList.add("hidden");
    byId("check-answer").disabled = true;
    byId("answered-status").textContent = "";

    const options = byId("answer-options");
    options.replaceChildren();
    const required = question.selectCount || 1;
    question.options.forEach((text, index) => {
      const label = document.createElement("label");
      label.className = "option";
      const input = document.createElement("input");
      input.className = "answer-choice";
      input.type = required > 1 ? "checkbox" : "radio";
      input.name = "answer";
      input.value = String(index);
      input.addEventListener("change", updateChoiceSelection);
      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = optionLetters[index];
      const answerText = document.createElement("span");
      answerText.textContent = text;
      label.append(input, letter, answerText);
      options.append(label);
    });
  }

  function updateChoiceSelection() {
    if (state.answered) return;
    const question = state.queue[state.index];
    state.selected = [...byId("answer-options").querySelectorAll("input:checked")]
      .map((input) => Number(input.value));
    [...byId("answer-options").children].forEach((label, index) => {
      label.classList.toggle("selected", state.selected.includes(index));
    });
    byId("check-answer").disabled = state.selected.length !== (question.selectCount || 1);
    byId("answered-status").textContent = question.selectCount
      ? `${state.selected.length} of ${question.selectCount} selected`
      : "";
  }

  function checkAnswer() {
    if (state.answered || !state.selected.length) return;
    state.answered = true;
    const question = state.queue[state.index];
    const selectedAnswers = state.selected.filter((answer) => answer !== null);
    const isCorrect = selectedAnswers.length === question.answer.length
      && selectedAnswers.every((answer) => question.answer.includes(answer));
    if (!isCorrect) state.missed.push(question);

    [...byId("answer-options").children].forEach((label, index) => {
      label.querySelector("input").disabled = true;
      label.classList.add("disabled");
      if (question.answer.includes(index)) label.classList.add("correct");
      else if (state.selected.includes(index)) label.classList.add("incorrect");
    });
    const feedback = byId("feedback");
    feedback.classList.toggle("wrong", !isCorrect);
    feedback.classList.remove("hidden");
    byId("feedback-icon").textContent = isCorrect ? "✓" : "↗";
    byId("feedback-title").textContent = isCorrect ? "That’s right" : "Not quite";
    const correctLetters = question.answer.map((answer) => optionLetters[answer]).join(" and ");
    const correctAnswerText = question.answer.map((answer) => question.options[answer]).join("; ");
    byId("feedback-explanation").textContent = `${question.explanation} Correct answer${question.answer.length > 1 ? "s" : ""}: ${correctLetters} — ${correctAnswerText}.`;
    byId("feedback-syllabus").textContent = question.syllabus ? `Syllabus reference: ${question.syllabus}` : `Topic: ${question.topic}`;
    byId("check-answer").classList.add("hidden");
    byId("next-question").classList.remove("hidden");
    byId("next-question").focus();
  }

  function nextQuestion() {
    state.index += 1;
    renderQuestion();
  }

  function showResults() {
    const total = state.queue.length;
    const score = total - state.missed.length;
    const percentage = Math.round((score / total) * 100);
    byId("results-heading").textContent = percentage >= 80 ? "Excellent progress." : percentage >= 60 ? "Good work." : "A solid start.";
    byId("results-subtitle").textContent = state.mode === "scenarios"
      ? "You’ve completed the scenario practice set."
      : state.mode === "topic"
        ? `You’ve completed the ${state.topicDomain} practice set.`
        : "You’ve completed this PRINCE2 Agile practice set.";
    byId("score-value").textContent = `${score} / ${total}`;
    byId("score-detail").textContent = `${percentage}% correct`;
    byId("results-message").textContent = state.missed.length
      ? `You got ${score} right and have ${state.missed.length} ${state.missed.length === 1 ? "question" : "questions"} to revisit. Review the explanations below, or try those questions again.`
      : "Perfect score! You answered every question correctly.";
    const retry = byId("retry-incorrect");
    retry.classList.toggle("hidden", state.missed.length === 0);
    const missedList = byId("missed-list");
    missedList.classList.toggle("hidden", state.missed.length === 0);
    missedList.replaceChildren();
    if (state.missed.length) {
      const heading = document.createElement("h2");
      heading.textContent = "Questions to revisit";
      missedList.append(heading);
      state.missed.forEach((question) => {
        const item = document.createElement("div");
        item.className = "missed-item";
        const title = document.createElement("strong");
        title.textContent = question.prompt;
        const explanation = document.createElement("p");
        explanation.textContent = question.explanation;
        item.append(title, explanation);
        missedList.append(item);
      });
    }
    const track = document.querySelector(".progress-track");
    if (track) track.setAttribute("aria-valuenow", "100");
    showScreen("results");
  }

  document.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.start));
  });
  document.querySelector('[data-screen="topics"]').addEventListener("click", () => {
    renderTopics();
    showScreen("topics");
  });
  document.querySelector('[data-screen="resources"]').addEventListener("click", () => showScreen("resources"));
  byId("back-home").addEventListener("click", () => showScreen("welcome"));
  byId("resources-back-home").addEventListener("click", () => showScreen("welcome"));
  byId("topic-cards").addEventListener("click", (event) => {
    const button = event.target.closest("[data-domain]");
    if (button) startQuiz("topic", questions, button.dataset.domain);
  });
  byId("check-answer").addEventListener("click", checkAnswer);
  byId("next-question").addEventListener("click", nextQuestion);
  byId("exit-quiz").addEventListener("click", () => showScreen(state.mode === "topic" ? "topics" : "welcome"));
  byId("restart-all").addEventListener("click", () => showScreen("welcome"));
  byId("retry-incorrect").addEventListener("click", () => startQuiz("review", state.missed));

  function renderTopics() {
    const grouped = new Map();
    questions.forEach((question) => {
      if (!grouped.has(question.domain)) grouped.set(question.domain, []);
      grouped.get(question.domain).push(question);
    });
    const cards = byId("topic-cards");
    cards.replaceChildren();
    grouped.forEach((items, domain) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "topic-card";
      card.dataset.domain = domain;
      const name = document.createElement("strong");
      name.textContent = domain;
      const description = document.createElement("span");
      description.textContent = `${items.length} ${items.length === 1 ? "question" : "questions"}`;
      const scenarios = items.filter((item) => item.type === "scenario").length;
      const detail = document.createElement("span");
      detail.className = "topic-card-detail";
      detail.textContent = scenarios ? `${scenarios} scenario${scenarios === 1 ? "" : "s"} included` : "Knowledge checks";
      card.append(name, description, detail);
      cards.append(card);
    });
  }
})();

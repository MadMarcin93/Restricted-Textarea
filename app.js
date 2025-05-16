const textarea = document.getElementById("input");
const error = document.getElementById("error");
const charCount = document.getElementById("charCount");
const lineInfo = document.getElementById("lineInfo");
const maxLength = 100;
const maxLines = 5;

textarea.addEventListener("input", () => {
  let lines = textarea.value.split("\n");

  // If line count exceeds maxLines, trim the extra lines
  if (lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    textarea.value = lines.join("\n");
  }

  lineInfo.textContent = `${lines.length} / ${maxLines} lines used`;
});

textarea.addEventListener("input", () => {
  const lines = textarea.value.split("\n");
  textarea.value = textarea.value.replace(/[^a-zA-Z \n]/g, "");
  const remaining = maxLength - textarea.value.length;
  charCount.textContent = `${remaining} characters remaining`;

  if (lines.length > 5) {
    // Trim to 5 lines
    textarea.value = lines.slice(0, 5).join("\n");
    error.textContent = "Maximum 5 lines allowed.";
  } else {
    return;
  }
});

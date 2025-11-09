function toggleChildren(button) {
  const parentElement = button.closest(".todolist-tree-item");
  const childrenContainer = parentElement.querySelector(
    ".todolist-children-container"
  );
  if (childrenContainer) {
    childrenContainer.classList.toggle("expanded");
    button.classList.toggle("expanded");
  }
}

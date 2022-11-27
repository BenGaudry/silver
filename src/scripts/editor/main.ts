import { getEditor } from "../projects/newProject"

document.addEventListener('DOMContentLoaded', () => {
  console.log(getEditor())
  getEditor().init(document)
})
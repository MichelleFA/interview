
let timer = null;
export default function debounce(method, delay, context) {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(method.apply(context), delay);
}

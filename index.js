// =========================================================
// Частина 1: fetch + .then + .catch + .finally (без async/await)
// =========================================================

function fetchPostsWithThen(url) {
  fetch(url)
    .then((response) => {
      // Перевіряємо статус відповіді, щоб 404 потрапив саме у .catch
      if (!response.ok) {
        throw new Error(`Ресурс не знайдено (HTTP статус: ${response.status})`);
      }
      return response.json();
    })
    .then((posts) => {
      console.log(
        `[Частина 1 - Успіх] Знайдено ${posts.length} постів, перший: "${posts[0].title}"`,
      );
    })
    .catch((error) => {
      console.error(
        `[Частина 1 - Помилка] Не вдалося завантажити пости: ${error.message}`,
      );
    })
    .finally(() => {
      console.log("[Частина 1] Запит завершено.");
    });
}

// 1. Успішний запит (Частина 1)
fetchPostsWithThen("https://jsonplaceholder.typicode.com/posts");

// 2. Перевірка обробки помилок на неіснуючому ресурсі (пункт 5)
fetchPostsWithThen("https://jsonplaceholder.typicode.com/posts/99999");

// =========================================================
// Частина 2: async + await + try/catch/finally
// =========================================================

async function loadPosts(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ресурс не знайдено (HTTP статус: ${response.status})`);
    }

    const posts = await response.json();
    console.log(
      `[Частина 2 - Успіх] Знайдено ${posts.length} постів, перший: "${posts[0].title}"`,
    );
  } catch (error) {
    console.error(
      `[Частина 2 - Помилка] Не вдалося завантажити пости: ${error.message}`,
    );
  } finally {
    console.log("[Частина 2] Запит завершено.");
  }
}

// 1. Успішний запит (Частина 2)
loadPosts("https://jsonplaceholder.typicode.com/posts");

// 2. Перевірка обробки помилок на неіснуючому ресурсі (Частина 2)
loadPosts("https://jsonplaceholder.typicode.com/posts/99999");

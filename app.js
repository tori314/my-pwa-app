// サービスワーカーの登録
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('Service Worker registered successfully.');
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

// 要素の取得
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// タスク追加の処理
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  
  if (taskText === '') {
    alert('タスクを入力してください');
    return;
  }

  // リストアイテムを作成
  const listItem = document.createElement('li');

  // タスクテキスト部分
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // チェックボタン
  const checkBtn = document.createElement('button');
  checkBtn.textContent = '✓';
  checkBtn.classList.add('check-btn');
  checkBtn.addEventListener('click', () => {
    taskSpan.classList.toggle('completed');
  });

  // 削除ボタン
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  // 要素をリストアイテムに追加
  listItem.appendChild(taskSpan);
  listItem.appendChild(checkBtn);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);

  // 入力フィールドをクリア
  todoInput.value = '';
});

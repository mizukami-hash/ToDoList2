"use strict";

{
  const fiveMinBtn = document.querySelector("#fiveMinBtn");
  const fiveMinText = document.querySelector("#fiveMinText");
  const todayBtn = document.querySelector("#todayBtn");
  const todayText = document.querySelector("#todayText");
  const tomorrowBtn = document.querySelector("#tomorrowBtn");
  const tomorrowText = document.querySelector("#tomorrowText");
  const deleteBtn = document.querySelector("#deleteBtn");

  let dataList = [];
  // let dataObj ={}
  //   date:"",
  //   states:"",
  //   content:""

  fiveMinBtn.addEventListener("click", () => {
    let dataObj = {};
    dataObj.date = new Date().getTime();
    dataObj.list = "5min";
    dataObj.content = fiveMinText.value;
    dataList.push(dataObj);
    localStorage.task = JSON.stringify(dataList);

    // リストに要素を追加
    if (fiveMinText.value.trim() === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    li.appendChild(checkbox).classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "tasks";
    li.appendChild(checkbox);

    const p = document.createElement("p");
    p.textContent = fiveMinText.value;
    li.appendChild(p);

    const moveToToday = document.createElement("button");
    moveToToday.classList.add("today");
    moveToToday.textContent = "→today";
    li.appendChild(moveToToday);
    // リスト移動============================================
    moveToToday.addEventListener("click", () => {
      console.log("today");
      p.closest("li").remove();
      // ul
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      li.appendChild(checkbox).classList.add("checkbox");
      checkbox.type = "checkbox";
      checkbox.name = "tasks";
      li.appendChild(checkbox);

      const content = document.createElement("p");
      content.textContent = p.textContent;
      li.appendChild(p);
      // 5分リストへの移動ボタン
      const moveToFiveMin = document.createElement("button");
      moveToFiveMin.classList.add("fiveMin");
      moveToFiveMin.textContent = "→5min";
      li.appendChild(moveToFiveMin);
      // 明日以降リストへの移動ボタン
      const moveToTomorrow = document.createElement("button");
      moveToTomorrow.classList.add("tomorrow");
      moveToTomorrow.textContent = "→tmr";
      li.appendChild(moveToTomorrow);

      // ulに追加
      const ul = document.querySelector("#todayList");
      ul.appendChild(li);
      todayText.value = "";
    });

    const moveToTomorrow = document.createElement("button");
    moveToTomorrow.classList.add("tomorrow");
    moveToTomorrow.textContent = "→tmr";
    li.appendChild(moveToTomorrow);

    // ulに追加
    const ul = document.querySelector("#fiveMinList");
    ul.appendChild(li);
    fiveMinText.value = "";
    console.log(li);
    // =============================================================

    // ダブルクリックで完了リストに移動
    p.addEventListener("dblclick", () => {
      p.closest("li").remove();
      // ul
      const ul = document.querySelector("#completed");
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "tasks";
      li.appendChild(checkbox).classList.add("checkbox");
      const content = document.createElement("p");
      content.textContent = p.textContent;
      li.appendChild(content);
      ul.appendChild(li);
    });
  });

  todayBtn.addEventListener("click", () => {
    let dataObj = {};
    dataObj.date = new Date().getTime();
    dataObj.list = "today";
    dataObj.content = todayText.value;
    console.log(dataObj);
    dataList.push(dataObj);
    localStorage.task = JSON.stringify(dataList);

    if (todayText.value.trim() === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    li.appendChild(checkbox).classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "tasks";
    li.appendChild(checkbox);

    const p = document.createElement("p");
    p.textContent = todayText.value;
    li.appendChild(p);
    // 5分リストへの移動ボタン
    const moveToFiveMin = document.createElement("button");
    moveToFiveMin.classList.add("fiveMin");
    moveToFiveMin.textContent = "→5min";
    li.appendChild(moveToFiveMin);
    // 明日以降リストへの移動ボタン
    const moveToTomorrow = document.createElement("button");
    moveToTomorrow.classList.add("tomorrow");
    moveToTomorrow.textContent = "→tmr";
    li.appendChild(moveToTomorrow);

    // ulに追加
    const ul = document.querySelector("#todayList");
    ul.appendChild(li);
    todayText.value = "";

    // ダブルクリックでリスト移動
    p.addEventListener("dblclick", () => {
      p.closest("li").remove();
      // ul
      const ul = document.querySelector("#completed");
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "tasks";
      li.appendChild(checkbox).classList.add("checkbox");
      const content = document.createElement("p");
      content.textContent = p.textContent;
      li.appendChild(content);
      ul.appendChild(li);
    });
  });

  tomorrowBtn.addEventListener("click", () => {
    let dataObj = {};
    dataObj.date = new Date().getTime();
    dataObj.list = "tomorrow";
    dataObj.content = tomorrowText.value;
    console.log(dataObj);
    dataList.push(dataObj);
    localStorage.task = JSON.stringify(dataList);

    if (tomorrowText.value.trim() === "") return;
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    li.appendChild(checkbox).classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.name = "tasks";
    li.appendChild(checkbox);

    const p = document.createElement("p");
    p.textContent = tomorrowText.value;
    li.appendChild(p);
    // 5分リストへの移動ボタン
    const moveToFiveMin = document.createElement("button");
    moveToFiveMin.classList.add("fiveMin");
    moveToFiveMin.textContent = "→5min";
    li.appendChild(moveToFiveMin);
    // 今日中リストへの移動ボタン
    const moveToToday = document.createElement("button");
    moveToToday.classList.add("today");
    moveToToday.textContent = "→today";
    li.appendChild(moveToToday);

    // ulに追加
    const ul = document.querySelector("#tomorrowList");
    ul.appendChild(li);
    tomorrowText.value = "";

    // ダブルクリックでリスト移動
    p.addEventListener("dblclick", () => {
      p.closest("li").remove();
      // ul
      const ul = document.querySelector("#completed");
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "tasks";
      li.appendChild(checkbox).classList.add("checkbox");
      const content = document.createElement("p");
      content.textContent = p.textContent;
      li.appendChild(content);
      ul.appendChild(li);
    });
  });

  function deleteRow() {
    const checkedList = document.querySelectorAll("input[name =tasks]:checked");
    console.log(checkedList);
    if (checkedList.length === 0) {
      return;
    }
    if (!confirm("削除しますか？")) {
      return;
    }
    checkedList.forEach((check) => check.closest("li").remove());
  }

  // const li = document.createElement("li");
  // document.querySelector("#tomorrowList").appendChild(li);
  // li.textContent = tomorrowText.value;
  // tomorrowText.value = "";

  // const checkbox = document.createElement("input");
  // checkbox.type = "checkbox";
  // li.appendChild(checkbox).classList.add("checkbox");

  deleteBtn.addEventListener("click", () => {
    //   const fiveMinList = document.querySelector("#fiveMinList");

    deleteRow();
  });

  // 選択したタスクをすべて削除

  // ダブルクリックでcompリストに移動

  // 登録ボタンクリック時のイベント

  // submit.addEventListener("click", () => {
  //   // 1行ごとの入力項目を入れるオブジェクトを作って値を代入
  //   const items = {};
  //   items.todo = todo.value;
  //   items.priority = priority.value;
  //   items.deadline = deadline.value;
  //   items.done = false;
  //   console.log(items);

  //   // リセット
  //   todo.value = "";
  //   priority.value = "普";
  //   deadline.value = "";

  //   // trを作成・追加

  //   const tr = document.createElement("tr");

  //   // tdを作成、itemsのdone項目に来た時だけチェックボックスを作成
  //   for (const prop in items) {
  //     const td = document.createElement("td");
  //     if (prop == "done") {
  //       const checkbox = document.createElement("input");
  //       checkbox.type = "checkbox";
  //       checkbox.checked = items[prop];
  //       td.appendChild(checkbox);
  //     } else {
  //       td.textContent = items[prop];
  //     }

  //     tr.appendChild(td);
  //   }
  //   table.appendChild(tr);
  // });

  // 絞り込みフィルターボタンの作成
  // const filterBtn = document.createElement('button');
  // filterBtn.textContent='優先度（高）で絞り込み';
  // filterBtn.id ='priority'  /*css用にidを追加*/
  // const main = document.querySelector('main');
  // main.appendChild(filterBtn);

  // filterBtn.addEventListener('click',()=>{
  //   for (const items of list){
  //     if(items.priority =='高'){
  //       addItem(items);
  //     }
  //   }

  // 未入力の時のエラー
  // 保存機能

  // });
}

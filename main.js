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
    const li = document.createElement("li");
    li.textContent = fiveMinText.value;
    document.querySelector("#fiveMinList").appendChild(li);

    fiveMinText.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox).classList.add("checkbox");
  });

  todayBtn.addEventListener("click", () => {
    let dataObj = {};
    dataObj.date = new Date().getTime();
    dataObj.list = "today";
    dataObj.content = todayText.value;
    console.log(dataObj);
    dataList.push(dataObj);
    localStorage.task = JSON.stringify(dataList);

    const li = document.createElement("li");
    document.querySelector("#todayList").appendChild(li);
    li.textContent = todayText.value;
    todayText.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox).classList.add("checkbox");
  });

  tomorrowBtn.addEventListener("click", () => {
    let dataObj = {};
    dataObj.date = new Date().getTime();
    dataObj.list = "tomorrow";
    dataObj.content = tomorrowText.value;
    console.log(dataObj);
    dataList.push(dataObj);
    localStorage.task = JSON.stringify(dataList);

    const li = document.createElement("li");
    document.querySelector("#tomorrowList").appendChild(li);
    li.textContent = tomorrowText.value;
    tomorrowText.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox).classList.add("checkbox");
  });

  deleteBtn.addEventListener("click", () => {
    const tasks = document.querySelectorAll("checkbox");
    console.log(tasks);
    // tasks.checked = true;
    if (tasks.checked === true) {
      tasks.classList.add("checked");
    }
  });

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

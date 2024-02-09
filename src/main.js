import Vue from "vue";
import App from "@/App";

Vue.config.productionTip = false;

chrome.extension.onMessage.addListener(() => {
  chrome.storage.sync.get(null, items => {
    Vue.prototype.$items = items;
    const target = document.activeElement;
    if (target.nodeName.toLowerCase() === "textarea") {
      target.value = new Vue({
        render: h => h(App)
      }).$mount().$el.innerText.replace(" ", "").replaceAll(" ", "\n");
    } else {
      // テキスト形式ではなくhtml形式で日報を書けるならおしゃれできそう
      // new Vue({
      //   render: h => h(App)
      // }).$mount(target.children[0]);
    }
  });
});

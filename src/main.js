import Vue from "vue";
import Template from "@/Template";

Vue.config.productionTip = false;

chrome.extension.onMessage.addListener(() => {
  chrome.storage.sync.get(null, items => {
    Vue.prototype.$items = items;
    const target = document.activeElement;
    const v = new Vue({
      render: h => h(Template)
    });
    if (target.nodeName.toLowerCase() === "textarea") {
      v.$mount()
      setTimeout(() => {
        target.value = v.$el.innerText.replace(" ", "").replaceAll(" ", "\n");
      }, 200)
    } else {
      // テキスト形式ではなくhtml形式で日報を書けるならおしゃれできそう
      // v.$mount(target.children[0]);
    }
  });
});

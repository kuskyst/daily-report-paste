window.onload = ()  => {
  const prefix = document.getElementById('prefix');
  const submit = document.getElementById('submit');

  chrome.storage.sync.get({
    selected_prefix: '',
  }, items => {
    prefix.value = items.selected_prefix;
  });

  submit.onclick = () => {
    chrome.storage.sync.set({
      selected_prefix: prefix.value,
    })
  }
};

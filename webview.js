module.exports = (Franz) => {
  function getMessages() {
    Franz.setBadge(document.querySelectorAll('unread_count').innerHTML);
  }

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};

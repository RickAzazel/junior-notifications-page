const notifyList = document.querySelectorAll('.notify-list__inner');
const notifyListArray = [...notifyList];
const markAllAsRead = document.querySelector('.notifications__mark-all');

/*
 *  This function counts the number of unread notifications 
 *  and displays the amount on the screen.
 */
const showNotificationsLeft = () => {
	const nitificationsCounter = document.querySelector('.notifications__counter');
	const notificationsLeft = notifyListArray
		.filter(item => !item.outerHTML.match('notify-list--checked')).length;

	nitificationsCounter.innerHTML = notificationsLeft;
}

notifyListArray.forEach(item => {

	showNotificationsLeft();

	item.addEventListener('click', () => {
		item.classList.add('notify-list--checked');
		showNotificationsLeft();
	});
});

markAllAsRead.addEventListener('click', () => {
	const nitificationsCounter = document.querySelector('.notifications__counter');

	notifyList.forEach(item => {
		item.classList.add('notify-list--checked');
		nitificationsCounter.innerHTML = 0;
	});
});
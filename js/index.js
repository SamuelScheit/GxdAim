// external js: flickity.pkgd.js
var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
	imagesLoaded: true,
	wrapAround: true,
	autoPlay: 2000,
	fullscreen: true,
	lazyLoad: 2
});

window.mobilecheck = function() {
	var check = false;
	(function(a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
};

if (mobilecheck()) {
	$('.mobilewarning').addClass('active');
	$('.otherhide').addClass('active');
	throw new ''();
}

$('.myCard img').click(function() {
	var self = this.parentElement;
	var type = $(self).attr('type');
	var id = $(self)
		.children()
		.get(1).id;

	$('#' + id)
		.removeClass('out')
		.addClass('six');
	$('body').addClass('modal-active');
	fullPage.setMouseWheelScrolling(false);
	fullPage.setAllowScrolling(false);
});

$('.modal-container').click(function(test) {
	if (!$(test.target).hasClass('modal-background')) return;
	$(this).addClass('out');
	$('body').removeClass('modal-active');
	fullPage.setMouseWheelScrolling(true);
	fullPage.setAllowScrolling(true);
});

var $isAnimatedFirst = $('.first .is-animated'),
	$isAnimatedSecond = $('.second .is-animated'),
	$isAnimatedThird = $('.third .is-animated'),
	$isAnimatedFourth = $('.fourth .is-animated');

var fullPage = new fullpage('#content', {
	scrollingSpeed: 800,
	menu: '#sidebarMenu',
	navigation: true,
	onLeave: function(index, nextIndex, direction) {
		index = index.index;
		nextIndex = nextIndex.index;
		if (index == 0 && nextIndex == 1) {
			$isAnimatedSecond
				.addClass('animated fadeInUp')
				.css('animation-delay', '.2s')
				.css('animation-duration', '1.5s');
		} else if ((index == 0 || index == 1) && nextIndex == 2) {
			$isAnimatedThird
				.addClass('animated fadeInUp')
				.css('animation-delay', '.2s')
				.css('animation-duration', '1.5s');
		} else if ((index == 0 || index == 1 || index == 2) && nextIndex == 3) {
			$isAnimatedFourth
				.addClass('animated fadeInUp')
				.css('animation-delay', '.2s')
				.css('animation-duration', '1.5s');
		}
	},
	afterLoad: function(origin, destination, direction) {
		console.log('load', destination.index);

		if (destination.index === 0) {
			$isAnimatedFirst
				.addClass('animated fadeInUp')
				.css('animation-delay', '.2s')
				.css('animation-duration', '1.5s');
		}

		var arr = document.querySelectorAll('section');
		var page = destination.index + 1;
		var progress = document.querySelector('.pageCounter progress');
		var p = document.querySelector('#progressText .page');
		var pOf = document.querySelector('#progressText .of');

		p.innerText = '0' + page;
		pOf.innerText = '0' + arr.length;

		var width = 100 / arr.length;
		width = width * page - width;

		document.documentElement.style.setProperty('--pageProgressValue', Math.floor(width) + '%');

		document.documentElement.style.setProperty('--pageProgressWidth', Math.floor(100 / arr.length) + '%');
		window.history.pushState(null, null, '#' + destination.item.id);
	}
});
window.fullPage = fullPage;

function clickLink(a) {
	var sidebar = document.querySelector('#sidebar');
	sidebarToggle(false);
	moveTo(a.attributes.to.value);
}

function send(e) {
	var name = document.querySelector('#name').value;
	var email = document.querySelector('#email').value;
	var text = document.querySelector('#text').value;
	var result = document.querySelector('#contactResult');

	var form = new FormData();
	form.append('email', email);
	form.append('name', name);
	form.append('text', text);

	result.innerHTML = 'Sending ...';

	fetch('api/contact.php', {
		method: 'post',
		body: form
	})
		.then(async res => {
			if (res.status === 200) {
				result.innerHTML = 'Contact send';
			} else {
				result.innerHTML = "Error: Contact couldn't be send";
				console.log(await res.text());
			}
		})
		.catch(async (a, b, c) => {
			console.log(a, b, c);
		});

	return false;
}

$(window).on('hashchange', function() {
	moveTo(location.hash);
});

function sidebarToggle(open) {
	var sidebar = document.querySelector('#sidebar');
	if (sidebar) {
		if (sidebar.classList.contains('show') && !open) {
			sidebar.classList.remove('show');
		} else if (open) {
			sidebar.classList.add('show');
		}
	}
}

function moveTo(section) {
	var arr = document.querySelectorAll('section');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].id === section) {
			fullPage.moveTo(i + 1);
			break;
		}
	}
}

function hide(t) {
	var sidebar = document.querySelector('#sidebar');
	if (sidebar) {
		sidebar.classList.remove('show');
	}
}

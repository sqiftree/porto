$(document).ready(function () {

  /* ─── DUST PARTICLES ──────────────────────────────────── */
  const $dustContainer = $('#dustParticles');
  const particleCount = 18;
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const dur = (Math.random() * 6 + 6).toFixed(1);
    const delay = (Math.random() * 8).toFixed(1);
    const drift = (Math.random() * 60 - 30).toFixed(0);
    const opacity = (Math.random() * 0.3 + 0.15).toFixed(2);
    $('<div class="dust-particle">').css({
      width: size + 'px',
      height: size + 'px',
      left: left + '%',
      bottom: Math.random() * 30 + '%',
      '--dur': dur + 's',
      '--delay': delay + 's',
      '--drift': drift + 'px',
      '--max-opacity': opacity
    }).appendTo($dustContainer);
  }

  /* ─── NAVBAR SCROLL EFFECT ────────────────────────────── */
  $(window).on('scroll.navbar', function () {
    if ($(this).scrollTop() > 40) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }
  });

  /* ─── MOBILE NAV TOGGLE ───────────────────────────────── */
  const $mobileNav = $('<div class="nav-mobile" id="mobileNav">').appendTo('body');
  $('#navbar .nav-links a').each(function () {
    $mobileNav.append(
      $('<a>').attr('href', $(this).attr('href')).text($(this).text())
    );
  });

  $('#navToggle').on('click', function () {
    $mobileNav.toggleClass('open');
  });

  // Close mobile nav on link click
  $mobileNav.find('a').on('click', function (e) {
    $mobileNav.removeClass('open');
    const hash = $(this).attr('href');
    if (hash && hash.startsWith('#')) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(hash).offset().top - 70 }, 700);
    }
  });

  /* ─── SMOOTH SCROLL (desktop nav) ────────────────────── */
  $('.nav-links a').on('click', function (e) {
    const hash = this.hash;
    if (hash !== '') {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(hash).offset().top - 70 }, 750);
    }
  });

  /* ─── FADE-IN ON SCROLL ──────────────────────────────── */
  function checkFadeIn() {
    const windowBottom = $(window).scrollTop() + $(window).height();
    $('.fade-in:not(.visible)').each(function () {
      if ($(this).offset().top < windowBottom - 60) {
        $(this).addClass('visible');
      }
    });
  }
  $(window).on('scroll.fadein', checkFadeIn);
  checkFadeIn();

  /* ─── SEARCH & CATEGORY FILTER (synced) ─────────────── */
  let activeCategory = 'all';

  function applyFilters() {
    const searchVal = $('#riderSearch').val().toLowerCase().trim();

    let visibleCount = 0;
    $('#ridersGrid .rider-card').each(function () {
      const $card = $(this);
      const matchCategory = activeCategory === 'all' || $card.data('category') === activeCategory;
      const matchSearch = $card.data('name').indexOf(searchVal) > -1
        || $card.text().toLowerCase().indexOf(searchVal) > -1;

      if (matchCategory && matchSearch) {
        $card.fadeIn(300);
        visibleCount++;
      } else {
        $card.fadeOut(200);
      }
    });

    if (visibleCount === 0) {
      $('#noResults').fadeIn(200);
    } else {
      $('#noResults').fadeOut(200);
    }
  }

  $('#riderSearch').on('keyup input', function () {
    applyFilters();
  });

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    activeCategory = $(this).data('filter');
    applyFilters();
  });

  /* ─── ACCORDION ──────────────────────────────────────── */
  $('.accordion-header span').addClass('accordion-arrow');

  $('.accordion-header').on('click', function () {
    const $header = $(this);
    const $body = $header.next('.accordion-body');
    const isOpen = $body.is(':visible');

    // Close all
    $('.accordion-body').slideUp(280);
    $('.accordion-header').removeClass('open');

    // Open clicked if it was closed
    if (!isOpen) {
      $body.slideDown(280);
      $header.addClass('open');
    }
  });

  /* ─── BACK TO TOP ────────────────────────────────────── */
  $(window).on('scroll.backtop', function () {
    if ($(this).scrollTop() > 400) {
      $('#backToTop').fadeIn(300);
    } else {
      $('#backToTop').fadeOut(300);
    }
  });

  $('#backToTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 650, 'swing');
    return false;
  });

});

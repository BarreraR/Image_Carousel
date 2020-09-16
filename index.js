/* eslint-disable strict */
/* eslint-disable no-console */
$('.thumbnail').on('click', e => {
  console.log($(e.currentTarget).find('img').attr('src'));
  console.log($(e.currentTarget).find('img').attr('alt'));

  const src = $(e.currentTarget).find('img').attr('src');
  const alt = $(e.currentTarget).find('img').attr('alt');

  $('.hero img').attr('src', src).attr('alt', alt);
});

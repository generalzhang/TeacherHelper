$(function() {
  // 初始化 tooltip，触发方式为手动触发
  $('input[data-toggle="tooltip"]').tooltip({
    placement: 'right',
    trigger: 'manual'

  })
  .on('focus', function() {
    // 获得焦点时隐藏
    $(this).tooltip('hide');
  })
  .on('blur', function() {
    // 失去焦点时显示
    $(this).tooltip('show');
  });
  $('#testtest').tooltip({
    placement: 'right',
    trigger: 'manual'

  })
  .on('click', function() {
    // 失去焦点时显示
    $(this).tooltip('show');
  });
  //用户名focus阻止浏览器的默认存储，把localstorge的放上去
});
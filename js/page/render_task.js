$(function(){window.token=localStorage.getItem("token");var a="http://es2.laizhuan.com/module/offer1/";window.urls={task_list:a+"ofrtask/getTaskList",change_status:a+"ofrtask/changeStatus",dialog_task:a+"ofrtask/getUnputTaskList",dialog_channel:a+"user/showAffiliate",source_list:a+"ofrtask/sourceLIst",addTask:a+"ofrtask/addTask",editTask:a+"ofrtask/editTask",testUrl:a+"ofrtask/testUrl",import_task:a+"ofrtask/copyTask"},window.source_data={},$.ajax({url:urls.source_list,async:!1,data:{token:token},dataType:"json"}).done(function(a){1==a.status&&$.each(a.data,function(a,t){source_data[t.id]=t.name})}),window.channel_data={},$.ajax({url:urls.dialog_channel,async:!1,data:{token:token},dataType:"json"}).done(function(a){1==a.status&&$.each(a.data,function(a,t){channel_data[t.id]=t.name})}),window.render_task=function(a,t){function _(a){var t=$(".data_storeurl").is(":input")?"val":"text";$(".data_storeurl")[t](a.storeurl),$(".data_storeid")[t](a.storeid),$(".data_name")[t](a.name),$(".data_price")[t](a.price),$(".data_countall")[t](a.countall),$(".data_keyword")[t](a.keyword),$(".data_keywordTop")[t](a.keywordTop),$(".data_source_id")[t](a.source_id),$(".source_name")[t](source_data[a.source_id]),$(".data_aff_name")[t](a.aff_name),$(".channel_name")[t](channel_data[a.affiliate_id]),$(".data_stime")[t](a.stime),$(".data_expire")[t](a.expire),$(".data_start_idfa")[t](a.start_idfa),$(".data_start_idfa_md5")[t](a.start_idfa_md5),$(".data_start_idfa_true")[t](a.start_idfa_true),$(".data_start_idfa_false")[t](a.start_idfa_false),$(".data_start_click")[t](a.start_click),$(".data_start_click_md5")[t](a.start_click_md5),$(".data_start_click_post")[t](a.start_click_post),$(".data_start_click_true")[t](a.start_click_true),$(".data_end_click")[t](a.end_click),$(".data_end_click_md5")[t](a.end_click_md5),$(".data_end_click_post")[t](a.end_click_post),$(".data_end_click_true")[t](a.end_click_true),"text"===t?($(".data_start_idfa_localsql").text(+a.start_idfa_localsql?"是":"否"),$(".data_start_click_callback").text(+a.start_click_callback?"是":"否"),$(".tip_isCallback").toggle(!!+a.start_click_callback),$(".data_count").text(a.count),$(".data_countdid").text(a.count?a.countall-a.count:0)):($(".data_start_idfa_localsql").prop("checked",+a.start_idfa_localsql),$(".data_start_click_callback").prop("checked",+a.start_click_callback),$(".data_count").val(a.count?a.countall-a.count:0))}$.ajax({url:"http://es2.laizhuan.com/module/offer1/ofrtask/taskDetail",dataType:"json",data:{token:token,task_id:a}}).done(function(a){1===a.status&&_(a.data),t&&t(a)}).fail(function(a){alert(JSON.stringify(a))})}});
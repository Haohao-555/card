$(function() {
    let $detail = $(".detail");
    let $project = $(".project")
    $detail.eq(0).on("touchstart", function(e) {
        $project.eq(0).append(
            `
            <div class='p1'>
              <strong>欢迎扫码体验</strong>
              <img src="https://i.loli.net/2021/08/22/rUuReNP4lgsdbCa.jpg">
            </div>
            `
        )
        $(this).remove();
    })

    $detail.eq(1).on("touchstart ", function(e) {
        $project.eq(1).append(
            `
            <div class='p2'>
               <a href='https://github.com/Haohao-555/mimi'>点我到仓库下载去</a> 
            </p1>
            `
        )
        $(this).remove();
    })

    $detail.eq(2).on("touchstart", function(e) {
        $project.eq(2).append(
            `
            <div class='p3'>
               <a href='http://39.104.61.32/weibo/'>去看看（建议PC端）</a> 
            </p1>
            `
        )
        $(this).remove();
    })

})
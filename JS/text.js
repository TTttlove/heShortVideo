// var text_movie=document.querySelector('.text').querySelectorAll('.text-movie')
// header里面有了

// 笨的方法

// 桃心变化函数
function text_PH_change(e) {
    console.log(e.target.getAttribute('src'));
    if (e.target.getAttribute('src') == './images/kong_tao.webp') {
        e.target.src = './images/shi_tao.webp'
    } else {
        e.target.src = './images/kong_tao.webp'
    }
    determine()
}
// 右侧的js苏醒
for (var i = 0; i < text_movie.length; i++) {
    var text_movie_a = text_movie[i].querySelector('.text-movie-pic').querySelector('.movie_a')
    var text_movie_like = text_movie[i].querySelector('.text-movie-pic').querySelector('.like')
    // 桃心部分
    text_movie_like.addEventListener('click', text_PH_change)

    // 渐变效果
    // 这里就开始有bug了，为什么会移动

    if ((i + 1) % 3 != 0) {
        text_movie[i].addEventListener('mouseover', function (e) {
            // 还不能在if里面，否则e不对了    
            var middle = this.nextElementSibling
            // console.log(this.parentElement.parentElement);
            console.log(e);
            // 如果是最后一个，则为null
            if (middle) {
                middle.classList.add('filter')
            }
            // 这里有问题，虽然是a但是是里面img
        })
        text_movie[i].addEventListener('mouseout', function (e) {
            var middle = this.nextElementSibling
            if (middle) {
                middle.classList.remove('filter')
            }
        })
    }






    // 介绍部分
    // text_movie_introduce.querySelector('p').addEventListener('click',function(e){
    //     if(e.target.nextElementSibling.firstElementChild.classList.contains('not-show')){
    //         e.target.nextElementSibling.firstElementChild.classList.remove('not-show')
    //     }else{
    //         e.target.nextElementSibling.firstElementChild.classList.add('not-show')
    //     }
    // })

    // var text_movie_tag=text_movie[i].querySelector('.text-movie-pic').querySelector('.tag')
    // 类型部分
    // text_movie_tag.firstElementChild.addEventListener('click',function(e){
    //     if(e.target.classList.contains('ellipsis')){
    //         e.target.classList.remove('ellipsis')
    //         e.target.parentElement.classList.remove('tag_width')
    //     }else{
    //         e.target.classList.add('ellipsis')
    //         e.target.parentElement.classList.add('tag_width')
    //     }
    // })
}
var rotationChart = 6
// 前期监听器的铺垫工作
var header_container = document.querySelector('.header').querySelector('.container')
var header_right = header_container.querySelector('.header-right')
var header_left = header_container.querySelector('.header-left')

// 后面text可以用到
var text_movie = document.querySelector('.text').querySelectorAll('.text-movie')


//开始
// 简易版轮播图,因为轮播图这类是直接对节点的操作，而非数据，所以这个最后。。
var heade_poster_num = header_right.querySelector('.header-poster').querySelector('.header-poster-num')
// 对于子元素就直接子节点操作
var heade_poster_span_zuo = header_right.querySelector('.zuojiantou')
var heade_poster_span_you = header_right.querySelector('.youjiantou')

// 文字效果
var header_right_character = header_right.querySelector('.header-poster').querySelector('.character')
// 这里代表左右轮播图的数量,从零开始
var left_RC = 0
// 注意点，这里是以最左边的图片为第一张，所以不是那啥，这也是个问题
// 右按钮轮播
var header_imgWeight = heade_poster_num.children[0].clientWidth
heade_poster_span_you.addEventListener('click', function (e) {
    if (left_RC != 5) {
        left_RC++
        heade_poster_num.style.transform = `translateX(-${left_RC * header_imgWeight}px)`
        heade_poster_span_zuo.style.cursor = 'pointer'
        header_right_character.style.transform = `translateX(${left_RC * header_imgWeight}px)`
        // 当播放到最右边的时候，拒绝播放
        if (left_RC == 5) {
            heade_poster_span_you.style.cursor = 'not-allowed'
        }
    }
    // 这样写就复杂了
    // else{
    //     heade_poster_num.style.transform=`translateX(-${5*header_imgWeight}px)`
    //     left_RC=4
    //     right_RC=0
    // }
    determine()
})
// 左按钮轮播
function header_RC_you() {
    if (left_RC != 0) {
        left_RC--
        heade_poster_num.style.transform = `translateX(-${left_RC * header_imgWeight}px)`
        header_right_character.style.transform = `translateX(${left_RC * header_imgWeight}px)`
        heade_poster_span_you.style.cursor = 'pointer'
        if (left_RC == 0) {
            heade_poster_span_zuo.style.cursor = 'not-allowed'
        }
    }
    determine()
}
// 看来还是不能直接这样写
heade_poster_span_zuo.addEventListener('click', header_RC_you)


// 下侧三按钮
var heade_three_bt = header_right.querySelector('.header-three_bt')
// er
var text_movie_pic_iconfont = text_movie[left_RC].querySelector
// 重复代码，后期优化简写，但其实还是有区别的
heade_three_bt.children[1].addEventListener('click', function () {
    like()
})
// san
heade_three_bt.children[2].addEventListener('click', function (e) {
    if (left_RC != 5) {
        left_RC++
        heade_poster_num.style.transform = `translateX(-${left_RC * header_imgWeight}px)`
        heade_poster_span_zuo.style.cursor = 'pointer'
        header_right_character.style.transform = `translateX(${left_RC * header_imgWeight}px)`
        // 当播放到最右边的时候，拒绝播放
        if (left_RC == 5) {
            heade_poster_span_you.style.cursor = 'not-allowed'
        }
    } else {
        left_RC = 0
        heade_poster_num.style.transform = `translateX(-${left_RC * header_imgWeight}px)`
        header_right_character.style.transform = `translateX(${left_RC * header_imgWeight}px)`
        // 代表新的一轮开始
        heade_poster_span_you.style.cursor = 'pointer'
        heade_poster_span_zuo.style.cursor = 'not-allowed'
    }
    determine()
})
function like() {
    var text_movie_pic_like = text_movie[left_RC].querySelector
        ('.text-movie-pic').querySelector('.like')
    if (text_movie_pic_like.getAttribute('src') == './images/shi_tao.webp' && heade_three_bt.children[1].textContent == '不喜欢') {
        // 代表空
        text_movie_pic_like.src = './images/kong_tao.webp'
        heade_three_bt.children[1].textContent = '喜欢'
        heade_three_bt.children[1].style.left = '43%'
        // 文字效果
    } else {
        text_movie_pic_like.src = './images/shi_tao.webp'
        heade_three_bt.children[1].textContent = '不喜欢'
        heade_three_bt.children[1].style.left = '42%'
    }
}
function determine() {
    var text_movie_pic_like = text_movie[left_RC].querySelector
        ('.text-movie-pic').querySelector('.like')
    if (text_movie_pic_like.getAttribute('src') == './images/shi_tao.webp') {
        heade_three_bt.children[1].textContent = '不喜欢'
        heade_three_bt.children[1].style.left = '42%'
    } else {
        heade_three_bt.children[1].textContent = '喜欢'
        heade_three_bt.children[1].style.left = '43%'
    }
    console.log(heade_three_bt.children[1]);
}





// var heade_three_bt=header_right.querySelector('.header-three_bt')


// function rotationChart_easy{

// }

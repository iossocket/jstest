import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

let fsm = new StateMachine({
    init: '收藏',
    transitions: [
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏',
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        // 监听执行收藏
        onDoStore: function () {
            alert('收藏成功')
            updateText()
        },
        // 监听取消收藏
        onDeleteStore: function () {
            alert('已经取消收藏')
            updateText()
        }
    }
})

let $btn = $('#btn1')
$btn.click(function () {
    if (fsm.is('收藏')) {
        fsm.doStore()
    } else {
        fsm.deleteStore()
    }
})


function updateText () {
    $btn.text(fsm.state)
}

// 初始化文案
updateText()

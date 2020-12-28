<template>
  <div class="about">
    <div id="printTest">
        <div style="page-break-after:always">
          <textarea name="test" id="" cols="30" rows="10">
            测试测试测试
          </textarea>
          <img src="@/assets/logo.png" alt="vuelogo">
          <main>这里是main主题</main>
          <p>我是第一个分页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第三页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第四页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第五页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第六页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第七页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第八页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第九页</p>
        </div>
        <div style="page-break-after:always">
          <p>我是第十页</p>
        </div>
    </div>
    <button type="button" v-print="'#printTest'">打印</button>
  </div>
</template>

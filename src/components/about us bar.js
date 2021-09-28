import $ from "jquery";
import React from "react";



function AboutUsBar() {
  //jquery anim for about us form

  $(document).ready(function () {
    $("#anim").click(function () {
      $(".div").fadeToggle(1000);
    });
    $("#anim2").click(function () {
      $(".div2").slideToggle(1000);
    });
  });
  return (
    <div className="container d-flex justify-content-center flex-column mt-3">
      <button className="btn btn-outline-primary mt-2" id="anim">
        {" "}
        شماره و ایمیل سازنده قالب
      </button>
      <div className="bg-primary div" style={{ display: "none" }}>
        <h1>راه های ارتباطی</h1>
        <ul>
          <li className="nav-link"> شماره تماس = 09397264682</li>
          <li className="nav-link"> ادرس ایمیل = fightman100@gmail.com</li>
        </ul>
      </div>

      <button className="btn btn-outline-primary mt-2" id="anim2">
        ادرس
      </button>
      <div className="bg-primary div2" style={{ display: "none" }}>
        <h1>آدرس</h1>
        <ul>
          <li className="nav-link">
            {" "}
            ادرس :لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default AboutUsBar;
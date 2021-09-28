///shows you your content
import React from "react";
function Content() {
  return (
    <div className="container mt-5">
      <div className="bg-white d-flex shadow flex-sm-row align-content-start">
        <div className="d-flex flex-sm-row flex-column">
          <a href="#/" className="btn my-btn order-3 order-sm-0">
            {" "}
            ادامه مطلب
          </a>
          <div className="order-1 order-sm-0 mr-2">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
          <div className="order-0 d-flex justify-content-center">
            <img
              src="https://miro.medium.com/max/375/0*h7xD-B7vanLQYWfp.jpg"
              alt="عکسی بود که دیگه نیست"
              title="عکس طبیعت"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
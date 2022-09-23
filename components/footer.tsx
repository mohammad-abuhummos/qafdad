/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


export default function Footer() {
  return (
    <>
      <div dir="rtl" className="py-10 bg-main-900 mt-10">
        <div className="flex justify-around items-center">
              <div><p className="text-white">من نحن</p></div>    
              <div><p className="text-white">جميع الحقوق محفوظة ل ق .ض</p></div>    
                  <div>
                      <div className="text-white">
                          <p>التواصل عبر</p>
                      </div>
                  </div>    
        </div>
      </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
    </>
  );
}

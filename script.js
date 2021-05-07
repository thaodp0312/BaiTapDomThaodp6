console.log("RUN SCRIPT");

// Đổi style của tiêu đề Our companies thành chữ in đậm và kích thước 32px
// Gợi ý: Sử dụng .style.fontWeight và .style.fontSize
document.getElementsByClassName("title-section")[0].style.fontWeight = "bold";
document.getElementsByClassName("title-section")[0].style.fontSize = "32px";
// Đổi màu nền của phần footer thành màu #0984e3
// Gợi ý: Sử dụng .style.backgroundColor
document.getElementsByClassName(
  "footer-section OMG-scroll-section"
)[0].style.backgroundColor = "#0984e3";
// Đổi đoạn text ở footer từ "© 2020 One Mount Group, JSC." thành "© 2021 One Mount Group, JSC."
// Gợi ý: Sử dụng .innerText
document.getElementsByClassName("footer-textarea")[2].innerText =
  "© 2021 One Mount Group, JSC.";
// Đổi ảnh đầu tiên thành ảnh onhousing.png
// Gợi ý: Sử dụng .src
document.getElementsByClassName("col-md-4 mb-3 text-center")[0].innerHTML =
  '\n              <a href="https://onehousing.vn/">\n                <img src="img/onhousing.png" alt="One Housing">\n              </a>\n            ';

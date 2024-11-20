document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const container = document.querySelector(".container");

  button.addEventListener("click", () => {
    // Tạo popup
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
            <h2>Cảm ơn cô!</h2>
            <p>Nhân ngày Nhà giáo Việt Nam 20/11, con xin gửi tới cô lời chúc chân thành và ý nghĩa nhất. Cảm ơn cô đã không chỉ truyền đạt tri thức, mà còn dạy con cách sống, cách làm người. Những bài học, sự tận tâm và tình yêu thương của cô chính là hành trang quý giá để con bước vào đời. Chúc cô luôn dồi dào sức khỏe, tràn đầy nhiệt huyết và mãi là ngọn đuốc soi sáng con đường tri thức cho các thế hệ học trò. Con luôn tự hào và biết ơn vì được là học trò của cô!</p>
        `;

    // Thêm popup vào container
    container.appendChild(popup);

    // Xóa popup sau 3 giây
    setTimeout(() => {
      if (popup.parentNode) {
        popup.remove();
      }
    }, 20000);
  });
});

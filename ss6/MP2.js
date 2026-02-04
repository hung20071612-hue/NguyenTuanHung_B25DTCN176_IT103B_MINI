let attempts = 0;
let isLoggedIn = false;

while (attempts < 3) {
    let username = prompt("Nhập tài khoản (admin):");
    let password = prompt("Nhập mật khẩu (12345):");

    if (username === "admin" && password === "12345") {
        isLoggedIn = true;
        break; // Thoát vòng lặp đăng nhập nếu đúng
    } else {
        attempts++;
        alert(`Sai thông tin! Bạn còn ${3 - attempts} lần thử.`);
    }
}

if (isLoggedIn == false) {
    alert("Tài khoản đã bị khóa do nhập sai quá 3 lần.");
} else {
    let libraries = ["Toán", "Văn", "Anh"];
    let isRunning = true;

    while (isRunning) {
        let choice = prompt(
            `MENU QUẢN LÝ THƯ VIỆN\n` +
            `1. Nhập thêm lô sách mới\n` +
            `2. Hiển thị danh sách sách\n` +
            `3. Tìm kiếm sách\n` +
            `4. Cập nhật tên sách\n` +
            `5. Đảo ngược thứ tự kệ sách\n` +
            `6. Nhập kho từ nguồn khác\n` +
            `7. Thoát chương trình\n\n` +
            `Nhập lựa chọn của bạn (1-7):`
        );

        switch (choice) {
            case "1":
                let inputString = prompt("Nhập danh sách sách mới (phân cách bởi dấu phẩy):");
                if (inputString) {
                    let newBooks = inputString.split(",");
                    let count = 0;
                    for (let book of newBooks) {
                        libraries.push(book.trim());
                        count++;
                    }
                    console.log(`Đã thêm thành công ${count} cuốn sách vào kho.`);
                }
                break;

            case "2":
                console.log("--- DANH SÁCH SÁCH HIỆN CÓ ---");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                break;

            case "3":
                let searchName = prompt("Nhập tên sách cần tìm:");
                let indexFound = libraries.indexOf(searchName);
                if (indexFound !== -1) {
                    console.log(`Sách "${searchName}" được tìm thấy tại vị trí ${indexFound}.`);
                } else {
                    console.log("Không tìm thấy sách này trong kho.");
                }
                break;

            case "4":
                let oldName = prompt("Nhập tên sách cần sửa:");
                let indexUpdate = libraries.indexOf(oldName);
                
                if (indexUpdate !== -1) {
                    let newName = prompt("Nhập tên mới cho sách:");
                    libraries[indexUpdate] = newName;
                    console.log("Cập nhật tên sách thành công!");
                } else {
                    console.log("Lỗi: Không tìm thấy sách cần sửa.");
                }
                break;

            case "5":
                libraries.reverse();
                console.log("--- DANH SÁCH SAU KHI ĐẢO NGƯỢC ---");
                for (let i in libraries) {
                    console.log(`Index ${i}: ${libraries[i]}`);
                }
                break;

            case "6":
                let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherBranch);
                console.log("Đã gộp kho sách từ chi nhánh khác thành công.");
                break;

            case "7":
                alert("Hẹn gặp lại!");
                isRunning = false;
                break;

            default:
                alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    }
}
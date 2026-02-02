let attempts = 0;
let isAuth = false;

while (attempts < 3) {
  let user = prompt("Mời bạn nhập tài khoản:");
  let pass = prompt("Mời bạn nhập mật khẩu:");
  if (user === "admin" && pass === "12345") {
    alert("Đăng nhập thành công!");
    isAuth = true;
    break;
  } else {
    attempts++;
    let left = 3 - attempts;
    if (user !== "admin" && pass !== "12345") {
      alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${left} lần thử.`);
    } else if (user !== "admin") {
      alert(`Sai tài khoản! Bạn còn ${left} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Bạn còn ${left} lần thử.`);
    }
  }
}

if (!isAuth) {
  alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {
  let option;
  do {
    let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
    menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
    menu += "2. Thiết kế sơ đồ kho sách (Dạng lưới)\n";
    menu += "3. Dự toán phí bảo trì sách theo năm\n";
    menu += "4. Tìm mã số sách may mắn\n";
    menu += "5. Thoát\n";
    menu += "Vui lòng nhập lựa chọn của bạn (1-5):";
    option = Number(prompt(menu));
    switch (option) {
        case 1: {
            let total = 0;
            let even = 0;
            let odd = 0;
            let id;
            alert("Nhập các mã số sách (Nhập 0 để dừng lại):");
            while (true) {
                id = Number(prompt("Nhập mã số sách:"));
                if (isNaN(id) || !Number.isInteger(id)) {
                    alert("Vui lòng nhập số nguyên hợp lệ!");
                    continue;
                }
                if (id === 0) break;

                total++;
                if (id % 2 === 0) {
                    even++;
                } else {
                    odd++;
                }
            }
            console.log("--- Kết quả phân loại mã sách ---");
            console.log(`- Tổng số lượng mã sách đã nhập: ${total}`);
            console.log(`- Số mã chẵn (Sách khoa học): ${even}`);
            console.log(`- Số mã lẻ (Sách nghệ thuật): ${odd}`);
            break;
        }

        case 2: {
            let rows = Number(prompt("Nhập số hàng của kho:"));
            let cols = Number(prompt("Nhập số cột của kho:"));

            if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
            alert("Số hàng và cột phải là số dương!");
            break;
            }
            console.log(`--- Bản đồ kho sách (${rows}x${cols}) ---`);
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= cols; j++) {
                    let pos = `[${i}-${j}]`;
                    if (i === j) {
                    pos += "(Kệ ưu tiên)";
                    }
                    row += pos + "  ";
                }
            console.log(row);
            }
            break;
        }
        case 3: {
            let qty = Number(prompt("Nhập số lượng sách hiện có:"));
            let cost = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):"));
            let years = Number(prompt("Nhập số năm dự toán:"));
            if (isNaN(qty) || isNaN(cost) || isNaN(years) || 
                qty <= 0 || cost <= 0 || years <= 0 || 
                !Number.isInteger(qty) || !Number.isInteger(years)) {
                alert("Dữ liệu nhập vào phải là số dương hợp lệ! (Số lượng và số năm phải là số nguyên)");
                break;
            }
            console.log("--- Dự toán phí bảo trì sách theo năm ---");
            let total;
            for (let year = 1; year <= years; year++) {
                total = qty * cost;
                console.log(`Năm ${year}: ${total.toLocaleString()} VNĐ (Đơn giá: ${cost.toFixed(0)}/cuốn)` );
                cost = cost * 1.1;
            }
            break;
        }
        case 4: {
            let max = Number(prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"));
            if (isNaN(max) || max <= 0) {
            alert("Vui lòng nhập số N dương!");
            break;
            }
            let count = 0;
            let list = "";

            console.log("--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---");
                for (let i = 1; i <= max; i++) {
                if (i % 3 === 0 && i % 5 !== 0) {
                    list += i + " ";
                    count++;
                }
            }
            console.log(list || "Không có mã nào thỏa mãn.");
            console.log(`=> Tổng cộng có ${count} mã may mắn.`);
            break;
        }
        case 5:
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
  } while (option !== 5);
}
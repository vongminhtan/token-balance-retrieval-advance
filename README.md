# token-balance-retrieval-advance

<b>Network support</b> <br />
- bsc: https://bscscan.com/ <br />
- ethereum: https://etherscan.io/ <br />
- polygon: https://polygonscan.com/ <br />
- optimism: https://optimistic.etherscan.io/ <br />
- arbitrum: https://arbiscan.io/ <br />
- base: https://basescan.org/ <br />
- tron <br />
- avalanche <br />
- solana <br />

<br />

<b>Cách lấy API KEY</b> <br />
- Bấm vào link phía trên => tạo tài khoản và đăng nhập => trỏ chuột vào user name => click vào mục API keys => Add <br />

<br />

<b>Giới hạn</b> <br />
- 100k requests/ 1 ngày <br />
- 5 requests/ giây <br />

- Nếu muốn sử dụng nhiều hơn thì phải go pro hoặc tạo nhiều account thay key mỗi khi dùng hết giới hạn. <br />

Note: Tron, avalanche, solana không cần API key nhưng cũng có giới hạn.  <br />

<br />

<b>CÁCH SỬ DỤNG</b> <br />

- Video hướng dẫn của bạn @khongbosotvicon: https://www.youtube.com/watch?v=qhrbg6bnc6Q
  <br />


- =GETTOKENBALANCE(walletAddress; contractAddress; network; divisor) <br />
- walletAddress: Địa chỉ ví holder <br />
- contractAddress: Địa chỉ hợp đồng token tùy theo network <br />
- network: 1 trong mạng sau: bsc, ethereum, polygon, optimism, arbitrum, base, tron, avalanche, solana <br />
- divisor: là decimal trong những mạng scan. Ví dụ: USDT là 6, USDC là 6, FDUSD là 18 <br />


  ![image](https://github.com/vongminhtan/token-balance-retrieval-advance/assets/45420102/4566bab1-3bd5-4632-83a9-e94cda729e44) <br />

<b>Note: </b> <br />
- Nếu Token có nhiều network thì phải tính tổng giá trị của tất cả network. <br />
- Nếu muốn cột hoặc hàng không tăng giảm khi kéo thả thì thêm ký tự $ vào cột hoặc hàng mà ta không muốn thay đổi. Ví dụ: $A1 => chỉ thay đổi hàng; A$1 => chỉ thay đổi cột; $A$1 => không thay đổi cả cột và hàng. <br />
- Phím tắt áp dụng công thức nhanh: Tại ô đã áp dụng công thức => Ctrl/Cmd + Shift + Right/Down (chọn dòng hoặc cột) => Ctrl/Cmd + Enter (Áp dụng công thức) <br />

- Ví dụ được lấy từ file (sorry vì không nhớ nguồn): https://docs.google.com/spreadsheets/d/1jGCmRimNIeEhT6ZXMMC1wgOwfdCmTa2kPKf4LPcT8tk/edit#gid=1144275933
  ![image](https://github.com/vongminhtan/token-balance-retrieval-advance/assets/45420102/4e24bf6f-6626-4f45-a973-5d443a150768)

<br />

### <span style="color:red">Khi mở file excel lần thứ 2 thì nó luôn bị hiển thị chữ `đang tải`, chờ hoài không thấy cập nhật gì. Tụi nó bị lười đấy, gọi tụi nó dậy bằng cách chạy 1 lệnh bất kỳ ở ô trống nào. Ví dụ: =SUM(1+2) </span>
 

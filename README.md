# token-balance-retrieval-advance

Network support <br />
bsc: https://bscscan.com/ <br />
ethereum: https://etherscan.io/ <br />
polygon: https://polygonscan.com/ <br />
optimism: https://optimistic.etherscan.io/ <br />
arbitrum: https://arbiscan.io/ <br />
base: https://basescan.org/ <br />
tron <br />
avalanche <br />
solana <br />

Cách lấy API KEY <br />
Bấm vào link phía trên => tạo tài khoản và đăng nhập => trỏ chuột vào user name => click vào mục API keys => Add <br />

Giới hạn <br />
100k requests/ 1 ngày <br />
5 requests/ giây <br />

Nếu muốn sử dụng nhiều hơn thì phải go pro hoặc tạo nhiều account. <br />

Note: Tron, avalanche, solana không cần API key nhưng cũng có giới hạn.  <br />

CÁCH SỬ DỤNG <br />
=GETTOKENBALANCE(contractAddress; walletAddress; network; divisor) <br />

- contractAddress: Địa chỉ hợp đồng token tùy theo network <br />
- walletAddress: Địa chỉ ví holder <br />
- network: 1 trong mạng sau: bsc, ethereum, polygon, optimism, arbitrum, base, tron, avalanche, solana <br />
- divisor: là decimal trong những mạng scan. Ví dụ: USDT là 6, USDC là 6, FDUSD là 18 <br />

  ![image](https://github.com/vongminhtan/token-balance-retrieval-advance/assets/45420102/4566bab1-3bd5-4632-83a9-e94cda729e44) <br />




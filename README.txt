# node?????
- js chạy ở đâu: browser
- nodejs giúp chúng ta có thể chạy được file js mà không cần browser
# JS
- Có 2 môi trường để thực thi file js:
+ nodejs
+ browser

# npm (node package manager)?????
- quản lý các thư viện mà cần trong dự án.
- package.json: file thư viện liệt kê ra thư viện cần trong dự án. (khoảng version của thư viện được phép cài đặt)
- package-lock.json: Liệt kê chính xác version của thư viện đang cài là bao nhiêu

# Command
** Chú ý là khi gỡ npm i hay npm run dev thì chúng ta đang ở trong thư mục của dự án.
- npm install hoặc npm i
- npm run dev

- ctrl + c: dừng quá trình chạy của terminal


# Folder
- node_modules: nơi lưu trữ thư viện trong dự án tại local
- public: dùng để lưu trữ file static, icon, image, audio.
- src: nơi code chính của chúng ta.
- vite.config.js: công cụ để chạy dự án - (live server)
- .eslintrc.cjs: (remove) Thống nhất cách code trong dự án. ( chỉ được dùng let và const )

# JSX
- Code HTML trong JS

# Update thư viện
- npm update
- npm outdated: liệt kê ra những thư viện lỗi thời
- npm i react@latest: cài thư viện react với phiên bản mới nhất
- npm i react-router: cài thư viện react-router
- npm i <ten_package>

# React-router

# Style
- inline style ✅
- external style 
- internal style
# React 
- inline style ✅
- global: chỉ cần import vào thì sẽ ăn cho toàn bộ dự án
- module: tên file phải là .module.css

# Data binding
- Dùng {}
- khác với template string ``: ${}

- kiểu dữ liệu chúng ta có thể binding lên trên UI: string, number, jsx.
- Nếu muốn xử lý điều kiện trong binding thì sử dụng toán tử ba ngôi (ternary). Không sử dụng if else

# Handle Event
- on: viết thường
- sự kiện: viết hoa
vd: onClick, onHover, onMouseMove, ...

# npm run <ten_script>
# npx
- npx vite: 
- npx sẽ nhìn vào folder node_modules/bin
- nếu như trong node_modules/bin không có vite thì nó sẽ down về và thực thi -> sau khi thực thi xong thì sẽ remove luôn

# Join
- method của array
- [1,2,3].join("-") => "1-2-3"

# Map
- method của array
- sau khi duyệt qua thì return về lại một mảng có độ dài bằng mảng truyền vào.
- return về một mảng các phần tử có cấu trúc phụ thuộc vào return của callback mà mình tryền vào.

# State
- 

# Tổng kết 3 buổi vừa qua
- 

# Tham số
- Giúp chúng ta tái sử dụng lại những logic bên trong function
# Props
- Giúp chúng ta tái sử dụng lại những UI (layout) đã có chỉ khác nhau dữ liệu mà mình đưa lên giao diện

- Có thể truyền bất kỳ kiểu dữ liệu gì cũng được thông qua props.

- Giúp chúng ta truyền dữ liệu từ component cha xuống component con.

# State
- Sử dụng useState khi muốn cập nhật lại một giá trị nào đó và giao diện render lại giá trị đó lên trên giao diện giúp mình.
- Có sự thay đổi về giao diện.
- Có thể mang bất kỳ kiểu dữ liệu nào.
- Nếu như muốn giá trị đó thay đổi làm cho giao diện cập nhật lại thì biến giá trị đó thành state. 

# Render file static (image, mp3, font)
- lưu ở trong folder public
- Nếu như lưu ở nào nào đó khác public thì phải sử dụng import

# Render List Array
- prop key phải đặt ở thẻ cha bao bọc ngoài cùng.
- Nếu như là thẻ <></> bao bọc ngoài cùng thì dùng dạng Fragment không dùng dạng rút gọn.

# Destructuring Object
- tên biến chúng ta muốn tạo trùng với tên giá trị thuộc tính của object chúng ta muốn lấy.
```js
const sv = {
    name: "Nguyen Van A",
    age: 20,
}

// const name = sv.name;
const {name} = sv;

// const age = sv.age;
const {age} = sv;
```

# Closure:
- khi một hàm "nhớ" phạm vi nơi nó được tạo ra
- Khi một hàm được định nghĩa trong một phạm vi (scope) nào đó, nó "ghi nhớ" phạm vi này ngay cả khi phạm vi đó không còn tồn tại.
Closure cho phép một hàm truy cập các biến trong phạm vi bên ngoài của nó, ngay cả sau khi phạm vi đó đã kết thúc.
```js
// Closure: khái niệm trong js

function outer() {
  let count = 0; // Biến trong phạm vi hàm outer

  function inner() {
    debugger;
    count++; // Hàm inner sử dụng biến count từ outer
    console.log(count);
  }

  return inner; // Trả về hàm inner
}

const inner = outer(); // Tạo closure
inner(); // 1
inner(); // 2
inner(); // 3
```

# Primitive type
- string, number, boolean, null, undefined, ...
- Được lưu ở vùng nhớ stack của thanh RAM

# Object type
- array, object, (function thuộc object)
- Được lưu ở vùng nhớ heap của thanh RAM

# stack
- Dùng để lưu trữ những dữ liệu có kích thước cố định.
```js
let age = 20;
age = 21;
// biến thay đổi giá trị
```

# heap
- Dùng để lưu trữ những dữ liệu có kích thước không cố định
```js
let sv = {};
sv.age = 20;
```

# Copy Array
Khi thay đổi mảng mới thì mảng cũ không bị ảnh hưởng.

- slice
- map
- spread operator

# Copy Object

- Object.assign({}, <đối tượng muốn copy toàn bộ thuộc tính>)

```js
let sv1 = {name: 'sv1', toan: 10, ly: 10, hoa: 10};
let sv2 = Object.assign({}, sv1);

sv2 !== sv1 // true
```
- spread operator
```js
let sv1 = {name: 'sv1', toan: 10, ly: 10, hoa: 10};
let sv2 = {...sv1, name: 'sv2'};

sv2 !== sv1 // true
```

# Set State
- Nếu như cập nhật giá trị mới bằng giá trị trước đó thì react sẽ không re-render giao diện.
- Muốn react re-render thì phải cập nhật giá trị mới khác giá trị trước đó.
- Chú ý: đặc biệt đối với ARRAY, Object.

# react-router: v7
- npm i react-router@latest

# useRef
- Giúp chúng ta lấy 1 element trong React.
- Trả về 1 object: { current: <gia_tri> }

# component
- Khi code component thì chú ý không xét cứng kích thước width, height của component đó
- Kích thước width, height: để nơi mình xử dụng muốn xét bao nhiều thì xét

# Form
- không được sử dụng giá trị: null hay undefined để binding cho prop value của thẻ input
- Nếu muốn reset về trạng thái ban đầu thì nhớ phải dùng empty string

# computed property
# spread props
# two way binding
# form

# Path
- "/list-student": domain + path 
  + Hiện tại đang ở địa chỉ: http://localhost:5173/chi-tiet
  + http://localhost:5173 + /list-student => http://localhost:5173/list-student

- "list-student": hiện tại + path
  + Hiện tại đang ở địa chỉ: http://localhost:5173/chi-tiet
  + http://localhost:5173/chi-tiet + list-student => http://localhost:5173/chi-tiet/list-student
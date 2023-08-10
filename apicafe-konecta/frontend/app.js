$(document).ready(() => {
  $.ajax({
    url: "http://localhost:8080/apikonecta-market/api/products/all",
    type: "GET",
    dataType: "json",
    success: function (res) {
      let data = "";
      res.forEach(item => {
        data += `
                    <tr>
                        <td>${item.productId}</td>
                        <td>${item.name}</td>
                        <td>${item.categoryId}</td>
                        <td>${item.price}</td>
                        <td>${item.stock}</td>
                        <td>${item.active}</td>
                    </tr>
                `;
      });

      $("#tbody").html(data);
    },
  });
});

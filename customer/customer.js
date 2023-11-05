// const bodyPerson = document.querySelector('#tbPerson tbody');
// async function fetchAllPerson() {
//     const response = await fetch("http://localhost:3301/person");
//     const persons = await response.json();
//     return persons;
// }
// const getAllPerson = async () => {
//     const persons = await fetchAllPerson();
//     console.log(persons);
//     persons.forEach((item) => {
//         const str = renderPerson(item);
//         bodyPerson.innerHTML += str;
//     });
// };
// const renderPerson = (obj) => {
//     return `
//     <tr>
//         <td>${obj.id}</td>
//         <td>${obj.fullName}</td>
//         <td>${obj.email}</td>
//         <td>${obj.phone}</td>
//         <td>${obj.address}</td>
//         <td>${obj.balance}</td>
//         <td>
//             <button class="btn btn-outline-secondary">
//                 <i class="far fa-edit"></i>
//             </button>
//         </td>
//         <td>
//             <button class="btn btn-outline-success">
//                 <i class="fas fa-plus"></i>
//             </button>
//         </td>
//         <td>
//             <button class="btn btn-outline-warning">
//                 <i class="fas fa-minus"></i>
//             </button>
//         </td>
//         <td>
//             <button class="btn btn-outline-primary">
//                 <i class="fas fa-exchange-alt"></i>
//             </button>
//         </td>
//         <td>
//             <button class="btn btn-outline-danger">
//                 <i class="fas fa-ban"></i>
//             </button>
//         </td>
//     </tr>
// `;
// };
// getAllPerson();
import { useEffect, useState, useCallback, useMemo } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";

const Home = () => {
  const [data, setData] = useState(null);
  const [pageData, setPageData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    if (data === null) {
      fetchData();
    }
  }, [data, fetchData]);

  const handlePrevous = useCallback(() => {
    setPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  }, []);

  const handleNext = useCallback(() => {
    setPage((prevPage) => (prevPage === pageCount ? prevPage : prevPage + 1));
  }, [pageCount]);

  useEffect(() => {
    const limit = 5;
    if (data !== null) {
      const skip = (page - 1) * limit;
      const pageDataSlice = data.slice(skip, skip + limit);
      setPageData(pageDataSlice);
      setPageCount(Math.ceil(data.length / limit));
    }
  }, [data, page]);

  const renderedPaginationItems = useMemo(() => {
    return Array(pageCount)
      .fill(null)
      .map((_, index) => (
        <Pagination.Item
          key={index}
          onClick={() => setPage(index + 1)}
          active={page === index + 1}
        >
          {index + 1}
        </Pagination.Item>
      ));
  }, [page, pageCount]);

  return (
    <>
      <h1>React Pagination Work</h1>

      <div className="table_div mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Title</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.title}</td>
                <td>
                  <img
                    src={item.thumbnail}
                    alt={item.category}
                    style={{ width: 80, height: 80 }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <Pagination>
          <Pagination.Prev onClick={handlePrevous} disabled={page === 1}>
            Previous
          </Pagination.Prev>
          {renderedPaginationItems}
          <Pagination.Next onClick={handleNext} disabled={page === pageCount}>
            Next
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};

export default Home;








// import { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import Pagination from "react-bootstrap/Pagination";

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [pageData, setPageData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://dummyjson.com/products");
//         setData(response.data.products);
//         console.log(response);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     if (data === null) {
//       fetchData();
//     }
//   }, [data]);

//   const handlePrevous = () => {
//     setPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
//   };

//   const handleNext = () => {
//     setPage((prevPage) => (prevPage === pageCount ? prevPage : prevPage + 1));
//   };
//   useEffect(() => {
//     const limit = 5;
//     if (data !== null) { // Check if data is not null
//       const skip = (page - 1) * limit;
//       const pageDataSlice = data.slice(skip, skip + limit);
//       setPageData(pageDataSlice);
//       setPageCount(Math.ceil(data.length / limit));
//       console.log(page)
//       console.log(data)
//     }
//   }, [data, page]);
//   return (
//     <>
//       <h1>React Pagination Work</h1>

//       <div className="table_div mt-3">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Price</th>
//               <th>Title</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.map((item, id) => (
//               <tr key={id}>
//                 <td>{item.id}</td>
//                 <td>{item.price}</td>
//                 <td>{item.title}</td>
//                 <td>
//                   <img
//                     src={item.thumbnail}
//                     alt={item.category}
//                     style={{ width: 80, height: 80 }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <div>
//         <Pagination>
//           <Pagination.Prev onClick={handlePrevous} disabled={page === 1}>
//             Previous
//           </Pagination.Prev>
//           {Array(pageCount)
//             .fill(null)
//             .map((_, index) => (
//               <Pagination.Item
//                 key={index}
//                 onClick={() => setPage(index + 1)}
//                 active={page === index + 1}
//               >
//                 {index + 1}
//               </Pagination.Item>
//             ))}

//           <Pagination.Next onClick={handleNext} disabled={page === pageCount}>
//             Next
//           </Pagination.Next>
//         </Pagination>
//       </div>
//     </>
//   );
// };

// export default Home;




// import { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import axios from "axios";
// import Pagination from "react-bootstrap/Pagination";

// const Home = () => {
//   const [data, setData] = useState([]);
//   const [pageData, setPageData] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [page, setPage] = useState(1);
//   console.log(data);

//   const getData = async () => {
//     try {
//       const response = await axios.get("https://dummyjson.com/products");
//       setData(response.data.products);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handelNext = () => {
//     if (page === pageCount) return page;
//     setPage(page + 1);
// };

//   const handelPrevous = () => {
//       if (page === 1) return page;
//     setPage(page - 1);
//   };

// useEffect(() => {
//   getData();
// }, [page]);

// useEffect(() => {
//   const pageDataCount = Math.ceil(data.length / 5);
//   setPageCount(pageDataCount);
//   if (page) {
//     const limit = 5;
//     const skip = limit * page;
//     const dataSkip = data.slice(0, skip);
//     setPageData(dataSkip);
//   }
// }, [data]);

//   return (
//       <>
//       <h1>React Pagination Work</h1>

//       <div className="table_div mt-3">
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Price</th>
//               <th>Title</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pageData.map((item, id) => (
//               <tr key={id}>
//                 <td>{item.id}</td>
//                 <td>{item.price}</td>
//                 <td>{item.title}</td>
//                 <td>
//                   <img
//                     src={item.thumbnail}
//                     alt={item.category}
//                     style={{ width: 80, height: 80 }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//       <div>
//         <Pagination>
//           <Pagination.Prev onClick={handelPrevous} disabled={page === 1}>
//             Prevous
//           </Pagination.Prev>

//           {/* <Pagination.Item active>{2}</Pagination.Item> */}
//           <Pagination.Next onCanPlay={handelNext} disabled={page === pageCount}>
//             Next
//           </Pagination.Next>
//         </Pagination>
//       </div>
//     </>
//   );
// };

// export default Home;

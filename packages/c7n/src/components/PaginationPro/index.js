import { Pagination } from "choerodon-ui/pro";
import "./css";

// const iconMap = {
//   prev: "navigate_before",
//   next: "navigate_next",
//   first: "first_page",
//   last: "last_page",
// };

// export const paginationItemRender = (page, type) => {
//   return (
//     <div className={`c7n-pro-pagination-item c7n-pro-pagination-${type}`}>
//       {type === "page" && <span>{page}</span>}
//       {Object.keys(iconMap).includes(type) && <Icon type={iconMap[type]} />}
//       {(type === "jump-prev" || type === "jump-next") && <span>•••</span>}
//     </div>
//   );
// };

export default Pagination;

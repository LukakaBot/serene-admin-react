import type { ReactElement } from "react";
import type { UserPageListParams, UserPageItem } from "@/api/system/user/types";
import { fetchUserPageList } from "@/api/system/user";
import useLoading from "@/hooks/loading/useLoading";

function UserPage(): ReactElement {
  useEffect(() => {
    getTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [loading, setLoading] = useLoading();
  const [searchParams, setSearchParams] = useState<UserPageListParams>({
    pageNum: 1,
    pageSize: 10,
    total: 0,
  });
  const [tableData, setTableData] = useState<UserPageItem[]>([]);

  async function getTableData() {
    try {
      setLoading(true);
      const { list, total } = await fetchUserPageList(searchParams);
      setTableData(list);
      setSearchParams({
        ...searchParams,
        total: total,
      });
      console.log(tableData);
      console.log(loading);
    } finally {
      setLoading(false);
    }
  }

  return <div className="page-container"></div>;
}

export default UserPage;

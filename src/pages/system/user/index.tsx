import type { ReactElement } from "react";
import type { UserPageListParams, UserPageItem } from "@/api/system/user/types";
import { fetchUserPageList } from "@/api/system/user";
import useLoading from "@/hooks/loading/useLoading";
import { ColumnDef } from "@tanstack/react-table";
import BaseDataTable from "@/components/BaseDataTable";

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

  const columns: ColumnDef<UserPageItem>[] = [
    {
      accessorKey: "name",
      header: "用户名",
    },
    {
      accessorKey: "age",
      header: "年龄",
    },
    {
      accessorKey: "phone",
      header: "手机号",
    },
    {
      accessorKey: "address",
      header: "地址",
    },
  ];

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

  return (
    <div className="page-container">
      <BaseDataTable columns={columns} data={tableData} />
    </div>
  );
}

export default UserPage;

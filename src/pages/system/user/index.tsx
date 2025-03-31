import type { ReactElement } from "react";
import type { UserPageListParams, UserPageItem } from "@/api/system/user/types";
import { fetchUserPageList } from "@/api/system/user";
import { useLoading } from "@/hook";
import { ColumnDef } from "@tanstack/react-table";
import BaseDataTable from "@/components/BaseDataTable";
import type { AddEditModalRef } from "./components/AddEditModal/types";
import AddEditModal from "./components/AddEditModal";
import type { ButtonGroupItem } from "@/components/ButtonGroup/types";
import ButtonGroup from "@/components/ButtonGroup";
import { Flex } from "antd";

function UserPage(): ReactElement {
  useEffect(() => {
    getTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addEditModalRef = useRef<AddEditModalRef>(null);

  const buttonGroupList: ButtonGroupItem[] = [
    {
      text: "添加",
      type: "primary",
      icon: "ep:plus",
      onClick: addEditModalRef.current?.openModal,
    },
  ];

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
    <Flex className="page-container" vertical gap={10}>
      <ButtonGroup list={buttonGroupList} />
      <BaseDataTable columns={columns} data={tableData} />
      <AddEditModal ref={addEditModalRef} />
    </Flex>
  );
}

export default UserPage;

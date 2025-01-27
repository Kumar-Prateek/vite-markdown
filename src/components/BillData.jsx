import List from "./list";
import { useGetBillDataQuery } from "../rtkquery";
import Loader from "./Loader";

export default function BillData() {
  const { data, error, isLoading } = useGetBillDataQuery("");

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading bill data.</div>;
  return (
    <>
      <h2 className="text-2xl font-bold">Bill Data</h2>
      <List data={data} />
      {isLoading ? <Loader /> : null}
    </>
  );
}

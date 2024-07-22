import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";

export default function PaginationComponent() {
  return (
    <Pagination total={10} initialPage={1} color="danger">
      <PaginationItem>Previous</PaginationItem>
      <PaginationCursor />
      <PaginationItem>Next</PaginationItem>
    </Pagination>
  );
}

import { Skeleton } from "@nextui-org/react";
import { Table } from "flowbite-react";


export default function LoadingTableNaves({rows = 3}) {
  const skeletonRows = [];
   

    for(let i = 0; i < rows; i++) {
        
        skeletonRows.push(
          <Table.Row key={i}>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
            <Table.Cell>
              <Skeleton className="rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
            </Table.Cell>
          </Table.Row>
        );
        }
  




return skeletonRows
}
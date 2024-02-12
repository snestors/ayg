import { formatearFechaHora } from "../../../../components/formatos/horadatetime";
import {  Pagination } from "@nextui-org/react";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import { Table } from "flowbite-react";
import { Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { queryNaves } from "../../../../lib/naves/nave";
import LoadingTableNaves from "../../../../components/ui/loadingTableNaves";

function ListNavesComponents({ search, estatus }) {
  const navigate = useNavigate();

  const onselect = (e) => {
    setITEM_PER_PAGE(Number(e.currentKey));
  };

  const ItemsPorPage = [10, 25, 50, 100];

  const [naves, setNaves] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [ITEM_PER_PAGE, setITEM_PER_PAGE] = useState(10);

  const ItemsPerPage = () => {
    let from = Math.round((page - 1) * ITEM_PER_PAGE);
    let to = Math.round(from + ITEM_PER_PAGE);
    if (page > 1) {
      from += 1;
    }

    return { from, to };
  };

  const getTotalPages = async () => {
    const tatolPages = await supabase
      .from("naves")
      .select("*", { count: "exact" });

    setTotalPage(Math.round(tatolPages.count / ITEM_PER_PAGE) + 1);
  };

  const dataSupa = async () => {
    setIsLoading(true);
    const { from, to } = ItemsPerPage();
    let query = supabase
      .from("naves")
      .select(queryNaves)
      .range(from, to)
      .order("fecha_atraque", { ascending: false });

    if (search) {
      query.ilike("nombre_nave", `%${search}%`);
    }

    if (!estatus.includes("TODOS")) {
      query.in("estatus", estatus);
    }

    const result = await query;

    setNaves(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getTotalPages();
    dataSupa();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, ITEM_PER_PAGE, search, estatus]);

  

  return (
    <>
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Buque de descarga</Table.HeadCell>
          <Table.HeadCell>Fecha Arribo</Table.HeadCell>
          <Table.HeadCell>Fecha Atraque</Table.HeadCell>
          <Table.HeadCell>Fecha Fin de Operacion</Table.HeadCell>
          <Table.HeadCell>Estatus</Table.HeadCell>
          <Table.HeadCell>Puerto</Table.HeadCell>
          <Table.HeadCell>Rubro</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          
          {isLoading ? <LoadingTableNaves rows={ITEM_PER_PAGE}/> : naves &&
            naves.map((nave) => (
              <Table.Row
                key={nave.id}
                onClick={() => navigate(`/Autos/Naves/${nave.id}`)}
              >
                <Table.Cell>{nave.id}</Table.Cell>
                <Table.Cell>{nave.nombre_nave}</Table.Cell>
                <Table.Cell>{formatearFechaHora(nave.fecha_arribo)}</Table.Cell>
                <Table.Cell>
                  {formatearFechaHora(nave.fecha_atraque)}
                </Table.Cell>
                <Table.Cell>
                  {formatearFechaHora(nave.fin_de_operaciones)}
                </Table.Cell>
                <Table.Cell>{nave.estatus}</Table.Cell>
                <Table.Cell>
                  {!nave.puerto ? "" : nave.puerto.puerto} -{" "}
                  {!nave.puerto ? "" : nave.puerto.origen.origen}
                </Table.Cell>
                <Table.Cell>
                  {nave.rubros.rubro} -{" "}
                  {nave.rubros.categoria_rubros.categoria_rubro}
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <div className="flex justify-center align-middle text-center space-x-5 ">
        <Pagination
          total={totalPage}
          onChange={(e) => setPage(e)}
          initialPage={page}
          showControls
        />
        <Select
          aria-label="Pages"
          size="xs"
          className="max-w-20"
          items={ItemsPorPage}
          selectedKeys={[ITEM_PER_PAGE.toString()]}
          onSelectionChange={onselect}
        >
          {ItemsPorPage.map((e) => (
            <SelectItem key={e.toString()}>{e.toString()}</SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
}

export default ListNavesComponents;

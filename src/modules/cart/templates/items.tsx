import { LineItem, Region } from "@medusajs/medusa"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div  className="bg-white hover:bg-white">
      <div className="pb-3 flex items-center bg-white hover:bg-white">
        <Heading className="text-[2rem] leading-[2.75rem] bg-white hover:bg-white">Cart</Heading>
      </div>
      <Table>
        <Table.Header className="border-t-0 bg-white hover:bg-white">
          <Table.Row className="text-ui-fg-subtle bg-white hover:bg-white txt-medium-plus ">
            <Table.HeaderCell className="!pl-0  bg-white hover:bg-white">Item</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell className="hidden bg-white hover:bg-white small:table-cell">
              Price
            </Table.HeaderCell>
            <Table.HeaderCell className="!pr-0 bg-white hover:bg-white text-right">
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className="bg-white hover:bg-white">
          {items && region
            ? items
                .sort((a, b) => {
                  return a.created_at > b.created_at ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} region={region} />
                })
            : Array.from(Array(5).keys()).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
        </Table.Body>
      </Table>
    </div>
  )
}

export default ItemsTemplate

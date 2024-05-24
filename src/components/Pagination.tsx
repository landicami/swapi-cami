import React from 'react'
import { CharactherResponse } from '../service/charService/swAPI.chartypes'

import Button from "react-bootstrap/Button";

interface PaginationProps {
	data: CharactherResponse
	getAllResources: (url?: string) => Promise<void>;
}

const Pagination :React.FC<PaginationProps> = ({ data, getAllResources }) => {
  return (
	<div className="d-flex justify-content-center">
                {data.links.map((link, index) => (
                 <>
				   <Button
                        key={index}
                        variant={link.active ? "secondary" : "warning"}
                        disabled={link.url === null}
                        onClick={() => {link.url && getAllResources(link.url )}}
                        className='me-2'
                    >
						{link.label}
                    </Button>

					</>
                ))}
		</div>
  )
}

export default Pagination

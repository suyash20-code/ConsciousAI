import {ArrowRight} from 'lucide-react';
export default function Button({children,href='#contact',variant='primary'}){return <a className={`button button-${variant}`} href={href}><span>{children}</span><ArrowRight size={17}/></a>}

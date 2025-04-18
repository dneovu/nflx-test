import { NavLink } from 'react-router';

interface HeaderLinkProps {
  linkTo: string;
  itemCount: number;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const HeaderLink = ({ linkTo, itemCount, Svg }: HeaderLinkProps) => {
  return (
    <NavLink to={linkTo} className="relative flex items-center justify-center">
      <div className="bg-accent absolute flex size-[18px] translate-x-4 -translate-y-3 items-center justify-center rounded-full text-sm font-medium text-white select-none">
        <span>{itemCount}</span>
      </div>
      <Svg className="fill-secondary hover:fill-accent size-6" />
    </NavLink>
  );
};

export default HeaderLink;

import styles from "./Header.module.less";

type SVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as ThemeIcon } from "./icons/theme.svg";

const iconMap = {
  github: GitHubIcon,
  theme: ThemeIcon,
};

type ContainerProps = Omit<ItemBarProps, "icon" | "text"> & {
  "data-text": string;
  children: React.ReactNode;
};

// Div or Anchor Tag depending if link exist or not
function Container(props: ContainerProps) {
  return !props.link ? (
    <div role="button" className={styles.iconbar} data-text={props["data-text"]} onClick={props.onClick}>
      {props.children}
    </div>
  ) : (
    <a
      className={styles.iconbar}
      data-text={props["data-text"]}
      role="button"
      target="_blank"
      rel="noreferrer"
      href={props.link}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}

type ItemBarProps = {
  icon: keyof typeof iconMap;
  text: string;
  link?: string;
  onClick?: React.ReactEventHandler;
};

function ItemBar({ icon, text, link, onClick }: ItemBarProps) {
  const Icon: SVGComponent = iconMap[icon];

  return (
    <Container data-text={text} link={link} onClick={onClick}>
      <Icon className={styles.icon} />
    </Container>
  );
}

export default ItemBar;

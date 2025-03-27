export default function useLoading(initValue: boolean = false) {
  const [loading, setLoading] = useState(initValue);

  return [loading, setLoading] as const;
}

import ExpoModulesCore

public class AuComHotbetModule: Module {
  public func definition() -> ModuleDefinition {
    Name("AuComHotbet")
    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
